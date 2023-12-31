import * as spinners from './collection';
import type { SpinnerProps } from './types';

export const Spinner: FC<SpinnerProps> = ({ name, ...rest }) => {
    const Icon = spinners[name];
    return Icon ? <Icon {...rest} /> : null;
};
