interface Calendar {
    schedulingButton: {
      load: (config: {
        url: string;
        color: string;
        label: string;
        target: HTMLElement | null;
      }) => void;
    };
  }
  
  interface Window {
    calendar: Calendar;
  }

