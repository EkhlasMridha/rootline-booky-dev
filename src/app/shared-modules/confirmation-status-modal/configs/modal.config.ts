import { InjectionToken } from '@angular/core';

export interface ModalConfig {
  warnColor: string;
  successColor: string;
  errorColor: string;
  generalColor: string;
  type: 'success' | 'warn' | 'error' | 'general';
  matIcon: string;
  localIcon: string;
  headerText: string;
  description: string;
  primaryButtonName: string;
  secondaryButtonName: string;
  modalWidth: string;
  disableClose: boolean;
  isLoader: boolean;
  loaderText: string;
  primaryEvent: () => any;
  secondaryEvent: () => any;
}

export const DefaultConfig: Partial<ModalConfig> = {
  successColor: '#009900 ',
  errorColor: '#ff0000 ',
  warnColor: '#FFCC00 ',
  generalColor: '#242424',
  type: 'general',
  modalWidth: 'auto',
  disableClose: false,
  isLoader: false,
  loaderText: 'Loading ...',
  primaryEvent: () => {},
  secondaryEvent: () => {},
};

export interface ModalToken {
  default: ModalConfig;
  config: Partial<ModalConfig>;
}

export const CONFIRMATION_MODAL_CONFIG = new InjectionToken<ModalToken>(
  'ModalToken'
);
