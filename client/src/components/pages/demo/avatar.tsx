import React from 'react';
import { DemoGrid } from '@client/components/pages/demo/demo-styles';
import { Avatar } from '@client/components/shared/avatar/avatar';
import { UserBase } from '@shared/api-types/user';

const users: UserBase[] = [
  { firstName: 'abc', lastName: 'zyx' },
  { firstName: 'john', lastName: '' },
  { firstName: 'john', lastName: 'doe' },
  { firstName: 'doe', lastName: 'jane' },
  { firstName: '', lastName: 'jane' },
  { firstName: '', lastName: '' },
  { firstName: ' a ', lastName: ' b ' },
  { firstName: '         x        ', lastName: '       y        ' },
];

export const PageAvatarDemo: React.FC = () => {
  return (
    <DemoGrid>
      {users.map((data) => (
        <div key={data.firstName + data.lastName}>
          <Avatar user={data} />
        </div>
      ))}
    </DemoGrid>
  );
};
