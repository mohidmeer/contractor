import AdminPageHeader from "../_components/AdminPageHeader";
import SettingsForm from "../_components/SettingsForm";
import BulkAiWritePanel from "../_components/BulkAiWritePanel";

export default function SettingsPage() {
  return (
    <div>
      <AdminPageHeader
        title="Settings"
        description="Manage site configuration, API keys, and bulk AI writing"
      />
      <div className="space-y-8">
        <SettingsForm />
        <BulkAiWritePanel />
      </div>
    </div>
  );
}
