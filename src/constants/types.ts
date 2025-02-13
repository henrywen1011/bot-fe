import { ReactNode } from "react";

export interface ICButtonStyleProps {
  dynamicStyle: {
    hoverBackColor?: string;
    hoverAction?: boolean;
    radius?: string;
    color?: string;
    width?: string;
    height?: string;
    backColor?: string;
    hoverColor?: string;
    fontFamily?: string;
    fontSize?: number;
    padding?: string;
    borderColor?: string;
    borderWidth?: string;
  };
}

export const NOOP = (): void => undefined;

export const BUTTON_TYPES = {
  PILLED: "Pills",
  ROUNDED: "Rounded",
  SQUARED: "Squared",
};

export interface ISVGIconProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  active?: boolean;
  black?: boolean;
  color?: string;
  fillColor?: string;
  size?: number;
}

export const MODAL_IDS = {
  IMPORT_WALLET: "import-wallet-modal",
};

export type MODAL_IDS_KEYS = keyof typeof MODAL_IDS;

export const MODAL_SIZE = {
  LARGE: "modal_lg",
  BIG: "modal_bg",
  DEFAULT: "",
  SMALL: "modal_sm",
  TINY: "modal_tn",
} as const;

export type ModalSizeType = (typeof MODAL_SIZE)[keyof typeof MODAL_SIZE];

export interface IModalProps {
  /**
   * Whether the modal is visible or not
   */
  isOpen: boolean;

  /**
   * Whether a close (x) button is visible on bottom of the modal or not
   */
  closable?: boolean;

  /**
   * Specify a function that will be called when the user clicks the Cancel button.
   */
  onClose?: () => void;

  /**
   * The Child nodes that are being rendered inside the Container Component
   */
  children: ReactNode;

  /**
   * The classname for adding additional styling to the modal
   */
  className?: string;
  /**
   * The modal title
   */
  title?: string;
  /**
   * The modal title
   */
  size?: ModalSizeType;
}

export interface IModalState {
  opened: boolean;
  params?: Record<string, any>;
}

export interface IModalsState {
  [modalId: string]: IModalState;
}

export interface IBtnGroupItem {
  name: string;
  active: boolean;
  onClick: () => Promise<void>;
  multi?: boolean;
}
