import type { SpinnerOption } from '../../types';
import { useSpinnerStyle } from '../../utils';

import classes from './style.module.css';

export const Block = (props: SpinnerOption) => {
    const style = useSpinnerStyle(props);
    return (
        <div className={classes.container} style={style}>
            <div />
        </div>
    );
};
