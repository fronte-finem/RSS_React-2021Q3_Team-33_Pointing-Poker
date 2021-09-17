export const enum TeamTitle {
  MENTOR = 'mentor',
  STUDENT = 'student',
}

type LinkProps = { title: TeamTitle; name: string; id: string };

export const links: LinkProps[] = [
  { title: TeamTitle.MENTOR, name: 'dimonwhite', id: '16417214' },
  { title: TeamTitle.STUDENT, name: 'Eremor', id: '14091202' },
  { title: TeamTitle.STUDENT, name: 'fronte-finem', id: '79711692' },
  { title: TeamTitle.STUDENT, name: 'KononOleg', id: '78895796' },
];

export const getGithub = (name: string) => `https://github.com/${name}`;

export const getAvatar = (id: string) =>
  `https://avatars.githubusercontent.com/u/${id}?s=120&v=4`;

export const RSS_LINK = 'https://rs.school/';
