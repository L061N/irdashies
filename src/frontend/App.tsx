// App.tsx
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import {
  TelemetryProvider,
  DashboardProvider,
  RunningStateProvider,
  SessionProvider,
  PitLaneProvider,
  ReferenceStoreProvider,
} from '@irdashies/context';
import { Settings } from './components/Settings/Settings';
import { ThemeManager } from './components/ThemeManager/ThemeManager';
import { HideUIWrapper } from './components/HideUIWrapper/HideUIWrapper';
import { OverlayContainer } from './components/OverlayContainer';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

/**
 * Overlay container content - renders all widgets in a single window
 */
const OverlayApp = () => {
  return (
    <HideUIWrapper>
      <ThemeManager>
        <OverlayContainer />
      </ThemeManager>
    </HideUIWrapper>
  );
};

/**
    Rework Settings UI Logic
*/

const AppProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<DashboardProvider bridge={window.dashboardBridge}>
			<TelemetryProvider bridge={window.irsdkBridge}>
				<RunningStateProvider bridge={window.irsdkBridge}>
					<SessionProvider bridge={window.irsdkBridge} />
					<PitLaneProvider bridge={window.pitLaneBridge} />
					<ReferenceStoreProvider bridge={window.referenceLapsBridge} />
					{children}
				</RunningStateProvider>
			</TelemetryProvider>
		</DashboardProvider>
	);
};

const App = () => {
	return (
		<ErrorBoundary label="app" resetAfterMs={2000}>
			<AppProviders>
				<Routes>
					<Route path="/settings/*" element={<Settings />} />
					<Route path="/" element={<OverlayApp />} />
				</Routes>
			</AppProviders>
		</ErrorBoundary>
	);
};

const el = document.getElementById('app');
if (!el) {
  throw new Error('No #app element found');
}

export default App;

const root = createRoot(el);
root.render(
	<HashRouter>
		<App />
	</HashRouter>
);
