'use client';

import { contactInfo } from '@/data';
import { trackCallClick } from '@/lib/analytics';
import { toggleJustCallWidget } from '@/lib/justCallTrigger';
import { BsFillTelephoneFill } from 'react-icons/bs';

type CallButtonProps = {
  useJustCall?: boolean;
};

const buttonClassName =
  'btn-primary flex h-[52px] items-center gap-2 !rounded-full border border-white/20 shadow-2xl hover:!scale-105';

const justCallButtonClassName =
  'btn-primary relative z-10 inline-flex h-[52px] w-[52px] shrink-0 items-center justify-center !rounded-full !p-0 border border-white/20 shadow-2xl hover:!scale-105';

const CallButton = ({ useJustCall = false }: CallButtonProps) => {
  if (useJustCall) {
    return (
      <button
        type="button"
        aria-label={`Call ${contactInfo.phone.text}`}
        className={justCallButtonClassName}
        onClick={async (event) => {
          event.preventDefault();
          trackCallClick('Floating call Button')();
          const toggled = await toggleJustCallWidget();
          if (!toggled) {
            window.location.href = contactInfo.phone.href;
          }
        }}
      >
        <BsFillTelephoneFill size={22} className="shrink-0 text-white" />
      </button>
    );
  }

  return (
    <a
      href={contactInfo.phone.href}
      className={buttonClassName}
      onClick={trackCallClick('Floating call Button')}
    >
      <BsFillTelephoneFill size={18} className="text-white" />
      <span className="text-white">{contactInfo.phone.text}</span>
    </a>
  );
};

export default CallButton;
