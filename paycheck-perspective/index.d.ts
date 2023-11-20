interface Window {
  hello: {
    world: string
    coolNumber: number
  }

  mainMessage: string
  mainNum: int
  logoPath: string
  
  //input stuff
  label: string;
  id: string;
  value: string;
  isDisabled: boolean;
  isRequired: boolean;
  placeholder: string;
  error: string;
//}

//interface buttonProps {
  saveM: string;
  applyM: string;
  shareM: string;
  savedN: int;
  func: Function;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  //onClick: () => void;
}