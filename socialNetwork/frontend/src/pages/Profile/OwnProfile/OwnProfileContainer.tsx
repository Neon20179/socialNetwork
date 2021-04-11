import React, { FC } from "react";
import { connect } from "react-redux";
import OwnProfile from "./OwnProfile";
import { OwnProfileProps } from "./ownProfileTypes";

const OwnProfileContainer: FC<OwnProfileProps> = ({ user }) => {
  return <OwnProfile user={user} />;
};

const mapStateToProps = (state: StateTypes["AppStateType"]) => ({
  user: state.user.user
});

export default connect(mapStateToProps)(OwnProfileContainer);
