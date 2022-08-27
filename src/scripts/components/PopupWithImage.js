import Popup from './Popup.js'

import {
  imageOfImagePopup,
  titleOfImagePopup
} from '../utils/constants.js'

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
  }

  open(evt) {
    const element = evt.target.closest('.element');
    const title = element.querySelector('.element__title').textContent;
    const link = evt.target.getAttribute('src');

    imageOfImagePopup.setAttribute('src', link);
    imageOfImagePopup.setAttribute('alt', title);
    titleOfImagePopup.textContent = title;

    super.open();
  }
}