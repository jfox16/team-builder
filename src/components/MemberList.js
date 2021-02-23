
import React from 'react';

import MemberListItem from './MemberListItem';

const MemberList = (props) => {

  const { members } = props;

  return (
    <div>
      {members?.map(member => (
        <MemberListItem member={member} key={member.name} />
      ))}
    </div>
  );
}

export default MemberList;