import React, { ReactElement } from 'react';
import UserHeader from '../components/Headers/UserHeader';

interface Props {}

export default function boards({}: Props): ReactElement {
  return (
    <React.Fragment>
      <UserHeader />
      <div>hey boards</div>
    </React.Fragment>
  );
}
