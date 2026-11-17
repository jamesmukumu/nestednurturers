import ServiceForm from '@/Components/Services/ServiceForm';

export default function EditService({ service }) {
    return <ServiceForm service={service} />;
}

EditService.layout = ServiceForm.layout;
