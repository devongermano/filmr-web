import { Partial } from "./partial";

export interface UserModel {
  firebaseUuid: string;
  email: string;
  username: string;
  bio: string;
  photoUrl: string;
  phoneNumber?: string;
  postsAdultContent?: boolean;
}

export interface CreateUserModel {
  // Things we absolutely need
  email: string; // Not provided by twitter
  username: string; // Get this from the twitter username, allow to change
  // adultContent?: boolean; // Will you posting or viewing adult content on the platform
  // age?: string; // Only if they want to view adult content I guess
  // defaultPhoto?: boolean; // twitter = additionalUserInfo.profile.default_profile_image
  // photoUrl?: string; // twitter = additionalUserInfo.profile.profile_image_url
}

export type UpdateUserModel = Partial<UserModel>;
