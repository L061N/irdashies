import type { Meta, StoryObj } from '@storybook/react-vite';
import { CarManufacturer } from './CarManufacturer';

const meta: Meta<typeof CarManufacturer> = {
    component: CarManufacturer,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        carId: {
            control: { type: 'number' },
            description: 'carID data',
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md', 'lg'],
            description: 'Size of the compound',
        },
        className: {
            control: { type: 'text' },
            description: 'Additional CSS classes',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllManufacturers: Story = {
    render: () => (
        <div className="flex flex-col gap-4 p-4 bg-slate-800 rounded-lg">
            <div className="flex items-center gap-4">
                <span className="text-white w-24">unknown:</span>
                <CarManufacturer carId={0} size="sm" />
                <CarManufacturer carId={0} size="md" />
                <CarManufacturer carId={0} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">skip barber:</span>
                <CarManufacturer carId={1} size="sm" />
                <CarManufacturer carId={1} size="md" />
                <CarManufacturer carId={1} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">sk:</span>
                <CarManufacturer carId={2} size="sm" />
                <CarManufacturer carId={2} size="md" />
                <CarManufacturer carId={2} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">pontiac:</span>
                <CarManufacturer carId={3} size="sm" />
                <CarManufacturer carId={3} size="md" />
                <CarManufacturer carId={3} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">promazda:</span>
                <CarManufacturer carId={4} size="sm" />
                <CarManufacturer carId={4} size="md" />
                <CarManufacturer carId={4} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">legendsford:</span>
                <CarManufacturer carId={5} size="sm" />
                <CarManufacturer carId={5} size="md" />
                <CarManufacturer carId={5} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">chevrolet:</span>
                <CarManufacturer carId={12} size="sm" />
                <CarManufacturer carId={12} size="md" />
                <CarManufacturer carId={12} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">radical:</span>
                <CarManufacturer carId={13} size="sm" />
                <CarManufacturer carId={13} size="md" />
                <CarManufacturer carId={13} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">silvercrown:</span>
                <CarManufacturer carId={18} size="sm" />
                <CarManufacturer carId={18} size="md" />
                <CarManufacturer carId={18} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">riley:</span>
                <CarManufacturer carId={21} size="sm" />
                <CarManufacturer carId={21} size="md" />
                <CarManufacturer carId={21} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">scca:</span>
                <CarManufacturer carId={23} size="sm" />
                <CarManufacturer carId={23} size="md" />
                <CarManufacturer carId={23} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">lotus:</span>
                <CarManufacturer carId={25} size="sm" />
                <CarManufacturer carId={25} size="md" />
                <CarManufacturer carId={25} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">vw:</span>
                <CarManufacturer carId={27} size="sm" />
                <CarManufacturer carId={27} size="md" />
                <CarManufacturer carId={27} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">ford:</span>
                <CarManufacturer carId={28} size="sm" />
                <CarManufacturer carId={28} size="md" />
                <CarManufacturer carId={28} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">indy:</span>
                <CarManufacturer carId={29} size="sm" />
                <CarManufacturer carId={29} size="md" />
                <CarManufacturer carId={29} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">williams:</span>
                <CarManufacturer carId={33} size="sm" />
                <CarManufacturer carId={33} size="md" />
                <CarManufacturer carId={33} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">mazda:</span>
                <CarManufacturer carId={34} size="sm" />
                <CarManufacturer carId={34} size="md" />
                <CarManufacturer carId={34} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">street:</span>
                <CarManufacturer carId={36} size="sm" />
                <CarManufacturer carId={36} size="md" />
                <CarManufacturer carId={36} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">iracing:</span>
                <CarManufacturer carId={37} size="sm" />
                <CarManufacturer carId={37} size="md" />
                <CarManufacturer carId={37} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">hpd:</span>
                <CarManufacturer carId={39} size="sm" />
                <CarManufacturer carId={39} size="md" />
                <CarManufacturer carId={39} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">cadillac:</span>
                <CarManufacturer carId={41} size="sm" />
                <CarManufacturer carId={41} size="md" />
                <CarManufacturer carId={41} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">mclaren:</span>
                <CarManufacturer carId={43} size="sm" />
                <CarManufacturer carId={43} size="md" />
                <CarManufacturer carId={43} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">kia:</span>
                <CarManufacturer carId={44} size="sm" />
                <CarManufacturer carId={44} size="md" />
                <CarManufacturer carId={44} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">ruf:</span>
                <CarManufacturer carId={48} size="sm" />
                <CarManufacturer carId={48} size="md" />
                <CarManufacturer carId={48} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">superlate:</span>
                <CarManufacturer carId={54} size="sm" />
                <CarManufacturer carId={54} size="md" />
                <CarManufacturer carId={54} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">bmw:</span>
                <CarManufacturer carId={55} size="sm" />
                <CarManufacturer carId={55} size="md" />
                <CarManufacturer carId={55} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">toyota:</span>
                <CarManufacturer carId={56} size="sm" />
                <CarManufacturer carId={56} size="md" />
                <CarManufacturer carId={56} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">holden:</span>
                <CarManufacturer carId={60} size="sm" />
                <CarManufacturer carId={60} size="md" />
                <CarManufacturer carId={60} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">aston:</span>
                <CarManufacturer carId={64} size="sm" />
                <CarManufacturer carId={64} size="md" />
                <CarManufacturer carId={64} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">mercedes:</span>
                <CarManufacturer carId={72} size="sm" />
                <CarManufacturer carId={72} size="md" />
                <CarManufacturer carId={72} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">audi:</span>
                <CarManufacturer carId={73} size="sm" />
                <CarManufacturer carId={73} size="md" />
                <CarManufacturer carId={73} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">FR2.0:</span>
                <CarManufacturer carId={74} size="sm" />
                <CarManufacturer carId={74} size="md" />
                <CarManufacturer carId={74} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">nissan:</span>
                <CarManufacturer carId={77} size="sm" />
                <CarManufacturer carId={77} size="md" />
                <CarManufacturer carId={77} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">dirt:</span>
                <CarManufacturer carId={78} size="sm" />
                <CarManufacturer carId={78} size="md" />
                <CarManufacturer carId={78} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">dirtsuper:</span>
                <CarManufacturer carId={84} size="sm" />
                <CarManufacturer carId={84} size="md" />
                <CarManufacturer carId={84} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">dirtwing410:</span>
                <CarManufacturer carId={86} size="sm" />
                <CarManufacturer carId={86} size="md" />
                <CarManufacturer carId={86} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">dirt360:</span>
                <CarManufacturer carId={87} size="sm" />
                <CarManufacturer carId={87} size="md" />
                <CarManufacturer carId={87} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">porsche:</span>
                <CarManufacturer carId={88} size="sm" />
                <CarManufacturer carId={88} size="md" />
                <CarManufacturer carId={88} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">ferrari:</span>
                <CarManufacturer carId={93} size="sm" />
                <CarManufacturer carId={93} size="md" />
                <CarManufacturer carId={93} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">midget:</span>
                <CarManufacturer carId={96} size="sm" />
                <CarManufacturer carId={96} size="md" />
                <CarManufacturer carId={96} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">subaru:</span>
                <CarManufacturer carId={101} size="sm" />
                <CarManufacturer carId={101} size="md" />
                <CarManufacturer carId={101} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">dirtTrucks:</span>
                <CarManufacturer carId={104} size="sm" />
                <CarManufacturer carId={104} size="md" />
                <CarManufacturer carId={104} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">FR3.5:</span>
                <CarManufacturer carId={105} size="sm" />
                <CarManufacturer carId={105} size="md" />
                <CarManufacturer carId={105} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">dallara:</span>
                <CarManufacturer carId={106} size="sm" />
                <CarManufacturer carId={106} size="md" />
                <CarManufacturer carId={106} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">indy2000:</span>
                <CarManufacturer carId={120} size="sm" />
                <CarManufacturer carId={120} size="md" />
                <CarManufacturer carId={120} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">usf2000:</span>
                <CarManufacturer carId={121} size="sm" />
                <CarManufacturer carId={121} size="md" />
                <CarManufacturer carId={121} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">dirtbigblock:</span>
                <CarManufacturer carId={131} size="sm" />
                <CarManufacturer carId={131} size="md" />
                <CarManufacturer carId={131} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">lamborghini:</span>
                <CarManufacturer carId={133} size="sm" />
                <CarManufacturer carId={133} size="md" />
                <CarManufacturer carId={133} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">vee:</span>
                <CarManufacturer carId={142} size="sm" />
                <CarManufacturer carId={142} size="md" />
                <CarManufacturer carId={142} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">hyundai:</span>
                <CarManufacturer carId={146} size="sm" />
                <CarManufacturer carId={146} size="md" />
                <CarManufacturer carId={146} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">honda:</span>
                <CarManufacturer carId={147} size="sm" />
                <CarManufacturer carId={147} size="md" />
                <CarManufacturer carId={147} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">buick:</span>
                <CarManufacturer carId={154} size="sm" />
                <CarManufacturer carId={154} size="md" />
                <CarManufacturer carId={154} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">latemodel:</span>
                <CarManufacturer carId={164} size="sm" />
                <CarManufacturer carId={164} size="md" />
                <CarManufacturer carId={164} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">renaultclio:</span>
                <CarManufacturer carId={162} size="sm" />
                <CarManufacturer carId={162} size="md" />
                <CarManufacturer carId={162} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">ff1600:</span>
                <CarManufacturer carId={163} size="sm" />
                <CarManufacturer carId={163} size="md" />
                <CarManufacturer carId={163} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">ligier:</span>
                <CarManufacturer carId={165} size="sm" />
                <CarManufacturer carId={165} size="md" />
                <CarManufacturer carId={165} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">acura:</span>
                <CarManufacturer carId={170} size="sm" />
                <CarManufacturer carId={170} size="md" />
                <CarManufacturer carId={170} size="lg" />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-white w-24">superformula:</span>
                <CarManufacturer carId={171} size="sm" />
                <CarManufacturer carId={171} size="md" />
                <CarManufacturer carId={171} size="lg" />
            </div>          
            <div className="flex items-center gap-4">
                <span className="text-white w-24">SFlight:</span>
                <CarManufacturer carId={178} size="sm" />
                <CarManufacturer carId={178} size="md" />
                <CarManufacturer carId={178} size="lg" />
            </div>          
            <div className="flex items-center gap-4">
                <span className="text-white w-24">srx:</span>
                <CarManufacturer carId={179} size="sm" />
                <CarManufacturer carId={179} size="md" />
                <CarManufacturer carId={179} size="lg" />
            </div>
        </div>
    ),
};