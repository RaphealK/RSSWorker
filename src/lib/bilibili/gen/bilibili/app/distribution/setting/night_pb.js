// @generated by protoc-gen-es v1.3.1 with parameter "target=js"
// @generated from file bilibili/app/distribution/setting/night.proto (package bilibili.app.distribution.setting.night, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { BoolValue } from "../v1/distribution_pb.js";

/**
 * 
 *
 * @generated from message bilibili.app.distribution.setting.night.NightSettingsConfig
 */
export const NightSettingsConfig = proto3.makeMessageType(
  "bilibili.app.distribution.setting.night.NightSettingsConfig",
  () => [
    { no: 1, name: "is_night_follow_system", kind: "message", T: BoolValue },
  ],
);
