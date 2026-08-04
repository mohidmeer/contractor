import AdminPageHeader from "../_components/AdminPageHeader";
import ChatbotPromptPanel from "../_components/ChatbotPromptPanel";
import ApiKeysPanel from "../_components/ApiKeysPanel";
import BulkAiWritePanel from "../_components/BulkAiWritePanel";

export default function SettingsPage() {
  return (
    <div>
      <AdminPageHeader
        title="Settings"
        description="Manage chatbot prompt, API keys, and bulk AI writing"
      />
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
          <ChatbotPromptPanel />
          <BulkAiWritePanel />
        </div>
        <ApiKeysPanel />
      </div>
    </div>
  );
}
