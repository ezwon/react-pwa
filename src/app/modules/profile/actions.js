import { createAction } from "redux-actions";
import {
  PROFILE_GET_USER_DETAILS,
  PROFILE_GET_USER_DETAILS_DONE,
  PROFILE_UPDATE_USER_DETAILS,
  PROFILE_UPDATE_USER_DETAILS_DONE,
  PROFILE_UPDATE_USER_IMAGE,
  PROFILE_UPDATE_USER_IMAGE_DONE,
  PROFILE_CHANGE_PASSWORD,
  PROFILE_CHANGE_PASSWORD_DONE,
  PROFILE_UPDATE_BACKUP_EMAIL,
  PROFILE_UPDATE_BACKUP_EMAIL_DONE,
  PROFILE_GET_OTHER_USER_DETAILS,
  PROFILE_GET_OTHER_USER_DETAILS_DONE,
} from "./constants";

export const profileGetUserDetails = createAction(PROFILE_GET_USER_DETAILS);
export const profileGetUserDetailsDone = createAction(
  PROFILE_GET_USER_DETAILS_DONE
);
export const profileUpdateUserDetails = createAction(
  PROFILE_UPDATE_USER_DETAILS
);
export const profileUpdateUserDetailsDone = createAction(
  PROFILE_UPDATE_USER_DETAILS_DONE
);
export const profileUpdateUserImage = createAction(PROFILE_UPDATE_USER_IMAGE);
export const profileUpdateUserImageDone = createAction(
  PROFILE_UPDATE_USER_IMAGE_DONE
);
export const profileChangePassword = createAction(PROFILE_CHANGE_PASSWORD);
export const profileChangePasswordDone = createAction(
  PROFILE_CHANGE_PASSWORD_DONE
);
export const profileUpdateBackupEmail = createAction(
  PROFILE_UPDATE_BACKUP_EMAIL
);
export const profileUpdateBackupEmailDone = createAction(
  PROFILE_UPDATE_BACKUP_EMAIL_DONE
);
export const profileGetOtherUserDetails = createAction(
  PROFILE_GET_OTHER_USER_DETAILS
);
export const profileGetOtherUserDetailsDone = createAction(
  PROFILE_GET_OTHER_USER_DETAILS_DONE
);
