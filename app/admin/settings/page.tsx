import AdminPageHeader from "../_components/AdminPageHeader";
import SettingsForm from "../_components/SettingsForm";
import ApiKeysPanel from "../_components/ApiKeysPanel";
import BulkAiWritePanel from "../_components/BulkAiWritePanel";

export default function SettingsPage() {
  return (
    <div>
      <AdminPageHeader
        title="Settings"
        description="Manage chatbot prompt, API keys, and bulk AI writing"
      />
      <div className="space-y-8">
        <SettingsForm />
        <ApiKeysPanel />
        <BulkAiWritePanel />
      </div>
    </div>
  );
}
