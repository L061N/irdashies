import { useDashboard } from '@irdashies/context';
import { SettingsLayout } from './SettingsLayout';

export const Settings = () => {
	const { currentDashboard } = useDashboard();

	if (!currentDashboard) {
    return <>Loading...</>;
  }

  return (
    <SettingsLayout />
  );
};
