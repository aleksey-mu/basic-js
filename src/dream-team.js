module.exports = function createDreamTeam(membersArray) {
  if (!Array.isArray(membersArray)) {
    return false;
  }

  const onlyMembers = [];
  for (member of membersArray) {
    if (typeof member === 'string') {
      onlyMembers.push(member.trim().split('')[0].toUpperCase());
    }
  }

  return onlyMembers.sort().join('');
};
