import { App } from "./uploadTranscript";

export interface SPIstruct {
  sem_name: string;
  spi: number;
  credits_completed: number;
}
export function Navigation() {
  return (
    <div>
      <div>
        <App />
      </div>
    </div>
  );
}
