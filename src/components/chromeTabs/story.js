import React from 'react';

import { storiesOf } from '@storybook/react';
import ChromeTabs from './index';


storiesOf('chromeTabs', module)
    .add('show', () => <ChromeTabs />)
	.add('dark theme', () => <ChromeTabs theme={'dark'}/>);
