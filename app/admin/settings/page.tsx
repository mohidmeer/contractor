import AdminPageHeader from "../_components/AdminPageHeader";
import ChatbotPromptPanel from "../_components/ChatbotPromptPanel";
import ApiKeysPanel from "../_components/ApiKeysPanel";
import SmtpSettingsPanel from "../_components/SmtpSettingsPanel";

export default function SettingsPage() {
  return (
    <div>
      <AdminPageHeader
        title="Settings"
        description="Manage chatbot prompt, API keys, and SMTP"
      />
      <div className="mx-auto max-w-5xl space-y-6">
        <ChatbotPromptPanel />
        <ApiKeysPanel />
        <SmtpSettingsPanel />
      </div>
    </div>
  );
}
