<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class InterviewController extends Controller
{

    public function getOrders(Request $request)
    {
        $disk = Storage::disk('private');
        $filePath = 'orders.json';

        if (!$disk->exists($filePath)) {
            return response()->json(['error' => 'Orders file not found.'], 404);
        }

        try {
            $orders = json_decode($disk->get($filePath), true, 512, JSON_THROW_ON_ERROR);
        } catch (\JsonException $exception) {
            return response()->json(['error' => 'Orders file contains invalid JSON.'], 500);
        }

        return response()->json([
            'orders' => $orders,
            'success' => true
        ], 200);
    }


    // problem 2
//     {
//     "id": 1001,
//     "customer": {
//       "id": 1,
//       "name": "Jane Wanjiku"
//     },
//     "status": "paid",
//     "items": [
//       {
//         "name": "Keyboard",
//         "quantity": 1,
//         "unit_price": 4500
//       },
//       {
//         "name": "Mouse",
//         "quantity": 2,
//         "unit_price": 1500
//       }
//     ]
//   },

    public function calculateTotalAmount(Request $request)
    {
        $disk = Storage::disk('private');
        $filePath = 'orders.json';

        if (!$disk->exists($filePath)) {
            return response()->json(['error' => 'Orders file not found.'], 404);
        }

        try {
            $orders = json_decode($disk->get($filePath), true, 512, JSON_THROW_ON_ERROR);
        } catch (\JsonException $exception) {
            return response()->json(['error' => 'Orders file contains invalid JSON.'], 500);
        }

        foreach ($orders as &$order) {
            $order['totals'] = 0;

            foreach ($order['items'] ?? [] as $item) {
                $order['totals'] += ($item['quantity'] ?? 0) * ($item['unit_price'] ?? 0);
            }
        }
        unset($order);

        return response()->json([
            'orders' => $orders,
            'success' => true,
        ], 200);
    }



    // problem 3
    public function filterOrders(Request $request)
    {
        $validated = $request->validate([
            'status' => 'sometimes|nullable|in:paid,pending,cancelled',
            'customer_id' => 'sometimes|nullable',
        ]);

        $disk = Storage::disk('private');
        $filePath = 'orders.json';

        if (!$disk->exists($filePath)) {
            return response()->json(['error' => 'Orders file not found.'], 404);
        }

        try {
            $orders = json_decode($disk->get($filePath), true, 512, JSON_THROW_ON_ERROR);
        } catch (\JsonException $exception) {
            return response()->json(['error' => 'Orders file contains invalid JSON.'], 500);
        }

        $status = $validated['status'] ?? null;
        $customerId = $validated['customer_id'] ?? null;

        $filteredOrders = array_values(array_filter($orders, function ($order) use ($status, $customerId) {
            return ($status === null || ($order['status'] ?? null) === $status)
                && ($customerId === null || ($order['customer']['id'] ?? null) == $customerId);
        }));

        return response()->json([
            'orders' => $filteredOrders,
            'success' => true,
            'count' => count($filteredOrders)
        ], 200);
    }


    //problem 4

    public function getOrder(Request $request)
    {
        $disk = Storage::disk('private');
        $filePath = 'orders.json';
        $id = $request->route("id");
        if (!$disk->exists($filePath)) {
            return response()->json(['error' => 'Orders file not found.'], 404);
        }

        try {
            $orders = json_decode($disk->get($filePath), true, 512, JSON_THROW_ON_ERROR);
        } catch (\JsonException $exception) {
            return response()->json(['error' => 'Orders file contains invalid JSON.'], 500);
        }

        foreach ($orders as $order) {
            if ((string) ($order['id'] ?? '') === (string) $id) {
                return response()->json([
                    'order' => $order,
                    'success' => true,
                ], 200);
            }
        }

        return response()->json(['error' => 'Order not found.'], 404);
    }
}

