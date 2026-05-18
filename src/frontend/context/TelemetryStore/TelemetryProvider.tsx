import type { IrSdkBridge } from '@irdashies/types';
import { useTelemetryStore } from '@irdashies/context';
import { useEffect } from 'react';
import type { PropsWithChildren } from 'react';

export interface TelemetryProviderProps {
  bridge: IrSdkBridge | Promise<IrSdkBridge>;
}

export const TelemetryProvider = ({
    bridge,
    children,
}: PropsWithChildren<TelemetryProviderProps>) => {
  const setTelemetry = useTelemetryStore((state) => state.setTelemetry);

  useEffect(() => {
    let cancelled = false;
    let unsub: (() => void) | undefined;

    const attach = (resolved: IrSdkBridge) => {
        unsub = resolved.onTelemetry((telemetry) => {
            setTelemetry(telemetry);
        });
    };

    if (bridge instanceof Promise) {
      bridge.then((resolved) => {
        if (cancelled) {
          resolved.stop();
          return;
        }
        attach(resolved);
      });
      return () => {
        cancelled = true;
        if (unsub) unsub();
        bridge.then((resolved) => resolved.stop());
      };
    }

    attach(bridge);

    return () => {
      cancelled = true;
      if (unsub) unsub();
      bridge.stop();
    };
  }, [bridge, setTelemetry]);

  return <>{children}</>;
};
