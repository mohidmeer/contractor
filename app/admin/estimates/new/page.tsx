import AdminPageHeader from "../../_components/AdminPageHeader";
import EstimateForm from "../../_components/EstimateForm";

export default function NewEstimatePage() {
  return (
    <div>
      <AdminPageHeader
        title="New Estimate"
        description="Create a new client estimate"
      />
      <EstimateForm mode="create" />
    </div>
  );
}
