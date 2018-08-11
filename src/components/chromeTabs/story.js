import React from 'react';

import { storiesOf } from '@storybook/react';
import ChromeTabs from './index';


storiesOf('chromeTabs', module)
    .add('defalult', () => <ChromeTabs />)
	.add('add tab', () => <ChromeTabs theme={'dark'}/>)
	.add('delete current tab', () => <ChromeTabs theme={'dark'}/>)
	.add('dark theme', () => <ChromeTabs theme={'dark'}/>);
