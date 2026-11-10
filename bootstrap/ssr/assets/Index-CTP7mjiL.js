import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { router, Head, Link } from "@inertiajs/react";
import { D as DataTable, C as Column } from "./datatable.esm-CXiPATCp.js";
import { A as AdminLayout } from "./AdminLayout-DuFPRx9L.js";
import { formatServices, formatDate, EnquiryStatusBadge, EnquiryStatusButton } from "./components-r35cbbUK.js";
import { u as updateEnquiryStatus } from "./enquiries-CfiI4ifY.js";
import "../ssr.js";
import "axios";
import "@inertiajs/react/server";
import "react-dom/server";
import "react-redux";
import "@reduxjs/toolkit";
import "./portal.esm-D9mKEukT.js";
import "react-dom";
import "./iconbase.esm-C6Zu_kc1.js";
import "react-transition-group";
import "./virtualscroller.esm-DaOHCdsa.js";
import "./paginator.esm-NnQVNDD7.js";
import "./sidebar.esm-Dou14AQP.js";
import "./inputtext.esm-DDz9PXvh.js";
import "./dropdown.esm-CKXiqnMR.js";
import "./overlayservice.esm-B2GBYfSa.js";
import "./button.esm-BxFUYIz-.js";
import "./index.esm-igEVmVoM.js";
import "./Button-phcvJh3z.js";
import "./ThemeToggle-CE-bVUI6.js";
function EnquirySkeleton() {
  return /* @__PURE__ */ jsx("div", { className: "enquiries-skeleton", "aria-label": "Loading enquiries", children: [0, 1, 2, 3].map((item) => /* @__PURE__ */ jsx("span", {}, item)) });
}
function cleanPageLabel(label) {
  return String(label).replace(/&laquo;|&raquo;/g, "").trim();
}
function buildQuery(filters, page = 1) {
  const query = {
    status: filters.status,
    q: filters.q || void 0,
    sort: filters.sort,
    per_page: filters.per_page,
    page
  };
  return Object.fromEntries(Object.entries(query).filter(([, value]) => value !== void 0));
}
function EnquiriesIndex({ enquiries, pagination, filters }) {
  const [search, setSearch] = useState(filters.q || "");
  const [refreshing, setRefreshing] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [statusOverrides, setStatusOverrides] = useState({});
  const [busyIds, setBusyIds] = useState([]);
  const [statusError, setStatusError] = useState("");
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);
  useEffect(() => {
    setSearch(filters.q || "");
  }, [filters.q]);
  useEffect(() => () => window.clearTimeout(toastTimer.current), []);
  useEffect(() => {
    const removeExceptionListener = router.on("exception", () => {
      setLoadError("We couldn’t load enquiries. Check your connection, then try again.");
      return false;
    });
    return removeExceptionListener;
  }, []);
  const visit = (nextFilters, page = 1, replace = false) => {
    setRefreshing(true);
    setLoadError("");
    router.get("/enquiries", buildQuery(nextFilters, page), {
      preserveState: true,
      preserveScroll: true,
      replace,
      onFinish: () => setRefreshing(false)
    });
  };
  useEffect(() => {
    if (search === (filters.q || "")) return void 0;
    const timer = window.setTimeout(() => {
      visit({ ...filters, q: search }, 1, true);
    }, 350);
    return () => window.clearTimeout(timer);
  }, [search, filters.status, filters.q, filters.sort, filters.per_page]);
  const showToast = (message, undoEnquiry = null) => {
    window.clearTimeout(toastTimer.current);
    setToast({ message, undoEnquiry });
    toastTimer.current = window.setTimeout(() => setToast(null), 6e3);
  };
  const changeStatus = async (enquiry, status, canUndo = true) => {
    const previousStatus = Boolean(statusOverrides[enquiry.id] ?? enquiry.isAddressed);
    const nextIsAddressed = status === "addressed";
    setStatusError("");
    setStatusOverrides((current) => ({ ...current, [enquiry.id]: nextIsAddressed }));
    setBusyIds((current) => [.../* @__PURE__ */ new Set([...current, enquiry.id])]);
    try {
      await updateEnquiryStatus(enquiry.id, status);
      showToast(
        nextIsAddressed ? "Marked as addressed." : "Enquiry reopened.",
        canUndo && nextIsAddressed ? enquiry : null
      );
      router.reload({
        only: ["enquiries", "pagination", "filters", "pendingEnquiriesCount"],
        preserveScroll: true,
        onSuccess: () => setStatusOverrides({})
      });
    } catch (requestError) {
      setStatusOverrides((current) => ({ ...current, [enquiry.id]: previousStatus }));
      setStatusError(requestError.message || "We couldn’t update this enquiry. Please try again.");
    } finally {
      setBusyIds((current) => current.filter((id) => id !== enquiry.id));
    }
  };
  const rows = Array.isArray(enquiries) ? enquiries.filter((enquiry) => !(filters.status === "pending" && statusOverrides[enquiry.id] === true)).map((enquiry) => ({
    ...enquiry,
    isAddressed: statusOverrides[enquiry.id] ?? enquiry.isAddressed
  })) : [];
  const hasFilters = filters.status !== "all" || Boolean(filters.q);
  const emptyMessage = hasFilters ? "No enquiries match your filters." : "No enquiries yet. New website submissions will appear here.";
  const listQuery = new URLSearchParams(buildQuery(filters, pagination.currentPage)).toString();
  const detailHref = (id) => `/enquiries/${id}?${listQuery}`;
  const retry = () => router.reload({
    only: ["enquiries", "pagination", "filters", "pendingEnquiriesCount"],
    preserveScroll: true,
    onStart: () => {
      setLoadError("");
      setRefreshing(true);
    },
    onFinish: () => setRefreshing(false)
  });
  const openEnquiry = (event) => {
    if (event.originalEvent.target.closest("a, button")) return;
    router.visit(detailHref(event.data.id));
  };
  const contactBody = (enquiry) => /* @__PURE__ */ jsxs("div", { className: "enquiries-table__contact", children: [
    /* @__PURE__ */ jsxs("a", { href: `mailto:${encodeURIComponent(enquiry.email).replace(/%40/gi, "@")}`, children: [
      /* @__PURE__ */ jsx("i", { className: "pi pi-envelope", "aria-hidden": "true" }),
      enquiry.email
    ] }),
    /* @__PURE__ */ jsxs("a", { href: `tel:${enquiry.phonenumber.replace(/[^\d+]/g, "")}`, children: [
      /* @__PURE__ */ jsx("i", { className: "pi pi-phone", "aria-hidden": "true" }),
      enquiry.phonenumber
    ] })
  ] });
  const nameBody = (enquiry) => /* @__PURE__ */ jsxs(Link, { className: "enquiries-table__name", href: detailHref(enquiry.id), children: [
    /* @__PURE__ */ jsx("span", { children: enquiry.name }),
    /* @__PURE__ */ jsxs("small", { children: [
      "Consultation #",
      enquiry.consultationID
    ] })
  ] });
  const actionBody = (enquiry) => /* @__PURE__ */ jsx(
    EnquiryStatusButton,
    {
      isAddressed: enquiry.isAddressed,
      disabled: busyIds.includes(enquiry.id),
      onClick: () => changeStatus(enquiry, enquiry.isAddressed ? "pending" : "addressed")
    }
  );
  return /* @__PURE__ */ jsxs(AdminLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Website consultations" }),
    /* @__PURE__ */ jsxs("section", { className: "enquiries-page", "aria-labelledby": "enquiries-heading", "aria-busy": refreshing, children: [
      /* @__PURE__ */ jsx("header", { className: "enquiries-page__header", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { id: "enquiries-heading", children: "Website consultations" }),
        /* @__PURE__ */ jsx("p", { children: "Review consultation requests and track follow-up." })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "enquiries-panel", "aria-label": "Website enquiry list", children: [
        /* @__PURE__ */ jsxs("div", { className: "enquiries-toolbar", children: [
          /* @__PURE__ */ jsx("div", { className: "enquiries-filters", role: "group", "aria-label": "Filter enquiries by status", children: ["all", "pending", "addressed"].map((status) => /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: `enquiries-filter${filters.status === status ? " is-selected" : ""}`,
              "aria-pressed": filters.status === status,
              onClick: () => visit({ ...filters, status, q: search }, 1),
              children: status[0].toUpperCase() + status.slice(1)
            },
            status
          )) }),
          /* @__PURE__ */ jsxs("label", { className: "enquiries-search", children: [
            /* @__PURE__ */ jsx("i", { className: "pi pi-search", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Search enquiries" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "search",
                value: search,
                maxLength: 100,
                placeholder: "Search name, email or request",
                onChange: (event) => setSearch(event.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("label", { className: "enquiries-select", children: [
            /* @__PURE__ */ jsx("span", { children: "Sort by" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                value: filters.sort,
                onChange: (event) => visit({ ...filters, sort: event.target.value, q: search }, 1),
                children: [
                  /* @__PURE__ */ jsx("option", { value: "-created_at", children: "Newest first" }),
                  /* @__PURE__ */ jsx("option", { value: "created_at", children: "Oldest first" })
                ]
              }
            )
          ] })
        ] }),
        loadError && /* @__PURE__ */ jsxs("div", { className: "enquiries-error", role: "alert", children: [
          /* @__PURE__ */ jsx("p", { children: loadError }),
          /* @__PURE__ */ jsx("button", { type: "button", className: "enquiries-button enquiries-button--secondary", onClick: retry, children: "Try again" })
        ] }),
        statusError && /* @__PURE__ */ jsx("p", { className: "enquiries-inline-error", role: "alert", children: statusError }),
        refreshing && rows.length > 0 && /* @__PURE__ */ jsx("p", { className: "enquiries-refreshing", role: "status", children: "Updating enquiries…" }),
        !Array.isArray(enquiries) && /* @__PURE__ */ jsx(EnquirySkeleton, {}),
        Array.isArray(enquiries) && rows.length === 0 && !refreshing && /* @__PURE__ */ jsxs("div", { className: "enquiries-empty", children: [
          /* @__PURE__ */ jsx("i", { className: "pi pi-inbox", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("p", { children: emptyMessage }),
          hasFilters && /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "enquiries-button enquiries-button--secondary",
              onClick: () => {
                setSearch("");
                visit({ ...filters, status: "all", q: "" }, 1);
              },
              children: "Clear filters"
            }
          )
        ] }),
        rows.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(
            DataTable,
            {
              value: rows,
              dataKey: "id",
              lazy: true,
              rowHover: true,
              stripedRows: true,
              responsiveLayout: "stack",
              breakpoint: "640px",
              onRowClick: openEnquiry,
              sortField: "created_at",
              sortOrder: filters.sort === "created_at" ? 1 : -1,
              onSort: (event) => visit({
                ...filters,
                sort: event.sortOrder === 1 ? "created_at" : "-created_at",
                q: search
              }, 1),
              emptyMessage,
              className: `enquiries-datatable${refreshing ? " is-refreshing" : ""}`,
              children: [
                /* @__PURE__ */ jsx(Column, { header: "Name", body: nameBody }),
                /* @__PURE__ */ jsx(Column, { header: "Contact", body: contactBody }),
                /* @__PURE__ */ jsx(
                  Column,
                  {
                    field: "servicesSeeked",
                    header: "Services requested",
                    body: (enquiry) => formatServices(enquiry.servicesSeeked) || "Consultation request"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Column,
                  {
                    field: "location",
                    header: "Location",
                    body: (enquiry) => enquiry.location || "—"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Column,
                  {
                    field: "created_at",
                    sortField: "created_at",
                    sortable: true,
                    header: "Received",
                    body: (enquiry) => formatDate(enquiry.createdAt)
                  }
                ),
                /* @__PURE__ */ jsx(
                  Column,
                  {
                    header: "Status",
                    body: (enquiry) => /* @__PURE__ */ jsx(EnquiryStatusBadge, { isAddressed: enquiry.isAddressed })
                  }
                ),
                /* @__PURE__ */ jsx(Column, { header: "Action", body: actionBody })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "enquiries-pagination", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "Showing ",
              pagination.from ?? 0,
              "-",
              pagination.to ?? 0,
              " of ",
              pagination.total
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "enquiries-select", children: [
              /* @__PURE__ */ jsx("span", { children: "Per page" }),
              /* @__PURE__ */ jsx(
                "select",
                {
                  value: filters.per_page,
                  onChange: (event) => visit({ ...filters, per_page: Number(event.target.value), q: search }, 1),
                  children: [10, 25, 50].map((count) => /* @__PURE__ */ jsx("option", { value: count, children: count }, count))
                }
              )
            ] }),
            /* @__PURE__ */ jsx("nav", { "aria-label": "Pagination", children: pagination.links.map((link, index) => {
              const label = cleanPageLabel(link.label);
              const isEllipsis = label === "...";
              if (isEllipsis) {
                return /* @__PURE__ */ jsx("span", { className: "enquiries-pagination__ellipsis", "aria-hidden": "true", children: "…" }, `${label}-${index}`);
              }
              return /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  className: `enquiries-pagination__button${label === String(pagination.currentPage) ? " is-current" : ""}`,
                  "aria-label": /^\d+$/.test(label) ? `Page ${label}` : label,
                  "aria-current": label === String(pagination.currentPage) ? "page" : void 0,
                  disabled: !link.url,
                  onClick: () => link.url && router.visit(link.url, { preserveState: true, preserveScroll: true }),
                  children: label
                },
                `${label}-${index}`
              );
            }) })
          ] })
        ] })
      ] }),
      toast && /* @__PURE__ */ jsxs("div", { className: "enquiries-toast", role: "status", "aria-live": "polite", children: [
        /* @__PURE__ */ jsx("span", { children: toast.message }),
        toast.undoEnquiry && /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => {
              window.clearTimeout(toastTimer.current);
              setToast(null);
              changeStatus(toast.undoEnquiry, "pending", false);
            },
            children: "Undo"
          }
        )
      ] })
    ] })
  ] });
}
export {
  EnquiriesIndex as default
};
//# sourceMappingURL=Index-CTP7mjiL.js.map
