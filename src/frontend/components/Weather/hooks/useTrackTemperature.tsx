import { useMemo } from 'react';
import { useTelemetry } from '@irdashies/context';
import { useGeneralSettings } from '@irdashies/context';



export const useTrackTemperature = () => {
    const { tempUnits } = useGeneralSettings() || {};
    const trackTempVal = useTelemetry('TrackTempCrew')
    const airTempVal = useTelemetry('AirTemp')

    if (tempUnits == 'Fahrenheit') {
        if (trackTempVal && trackTempVal.value) {
            trackTempVal.value = trackTempVal.value.map((val) => (val * 9 / 5) + 32);
            trackTempVal.unit = 'F';
        }
        if (airTempVal && airTempVal.value) {
            airTempVal.value = airTempVal.value.map((val) => (val * 9 / 5) + 32);
            airTempVal.unit = 'F';
        }
    }


    const trackTemp = useMemo(() => {
        const trackTemp = trackTempVal?.value[0] ?? 0;
        if (trackTemp === null || trackTemp === undefined) return '';
        return `${trackTemp.toFixed(0)}°${trackTempVal?.unit ?? 'C'}`;
    }, [trackTempVal?.unit, trackTempVal?.value]);

    const airTemp = useMemo(() => {
        const airTemp = airTempVal?.value[0] ?? 0;
        if (airTemp === null || airTemp === undefined) return '';
        return `${airTemp.toFixed(0)}°${airTempVal?.unit ?? 'C'}`;
    }, [airTempVal?.unit, airTempVal?.value]);

    return { trackTemp, airTemp };
};
