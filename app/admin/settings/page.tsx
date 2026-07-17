import AdminPageHeader from "../_components/AdminPageHeader";
import SettingsForm from "../_components/SettingsForm";

export default function SettingsPage() {
  return (
    <div>
      <AdminPageHeader
        title="Settings"
        description="Manage site configuration and API keys"
      />
      <SettingsForm />
    </div>
  );
}
