import 'styled-components';

export interface InteractiveColors {
  normal: string;
  hover: string;
  active: string;
}

export interface FullInteractiveColors {
  fg: InteractiveColors;
  bg: InteractiveColors;
}

export interface ButtonTheme {
  default: FullInteractiveColors;
  primary: FullInteractiveColors;
}

export interface ToggleTheme {
  checked: string;
  unchecked: string;
}

export interface ForeGroundBackGround {
  fg: string;
  bg: string;
}

export interface InputTheme extends ForeGroundBackGround {}
export interface GameCardTheme extends ForeGroundBackGround {
  hover: string;
  active: ForeGroundBackGround;
}
export interface TimerTheme extends ForeGroundBackGround {
  desc: string;
}

export interface ModalTheme extends ForeGroundBackGround {
  title: string;
}
export interface AvatarTheme extends ForeGroundBackGround {}

export interface UserCardTheme extends ForeGroundBackGround {
  owner: string;
  jobPosition: string;
  dealer: ForeGroundBackGround;
  deleteBtn: InteractiveColors;
}

export interface ChatModalTheme extends ForeGroundBackGround {
  failMessage: string;
}
export interface ChatMessageTheme extends ForeGroundBackGround {
  dateTime: string;
}
export interface ChatTheme {
  modal: ChatModalTheme;
  message: ChatMessageTheme;
}

export interface IssueCardTheme extends ForeGroundBackGround {
  priority: string;
  current: ForeGroundBackGround;
  button: {
    default: InteractiveColors;
    danger: InteractiveColors;
  };
}

export interface HeaderTheme extends ForeGroundBackGround {
  logo: {
    letter1: string;
    letter2: string;
    rhombus: string;
  };
  btn: {
    chat: InteractiveColors;
  };
}

export interface FooterTheme extends ForeGroundBackGround {
  logo: InteractiveColors;
  team: {
    mentor: FullInteractiveColors;
    student: FullInteractiveColors;
  };
}

export interface ContentTheme extends ForeGroundBackGround {
  shadow: string;
}

export interface MainPageTheme {
  title: string;
  subtitle: string;
}

export interface LobbyPageTheme {
  title: string;
  subtitle: string;
  text: string;
}

export interface PagesTheme {
  main: MainPageTheme;
  lobby: LobbyPageTheme;
}

export interface FormTheme extends ForeGroundBackGround {}

declare module 'styled-components' {
  export interface DefaultTheme extends ForeGroundBackGround {
    link: InteractiveColors;
    button: ButtonTheme;
    toggle: ToggleTheme;
    input: InputTheme;
    timer: TimerTheme;
    modal: ModalTheme;
    avatar: AvatarTheme;
    gameCard: GameCardTheme;
    userCard: UserCardTheme;
    issueCard: IssueCardTheme;
    chat: ChatTheme;
    header: HeaderTheme;
    footer: FooterTheme;
    content: ContentTheme;
    pages: PagesTheme;
    form: FormTheme;
  }
}
