// @generated by protoc-gen-connect-es v0.13.0 with parameter "target=js"
// @generated from file bilibili/app/show/popular/v1/popular.proto (package bilibili.app.show.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { PopularReply, PopularResultReq } from "./popular_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * 热门
 *
 * @generated from service bilibili.app.show.v1.Popular
 */
export const Popular = {
  typeName: "bilibili.app.show.v1.Popular",
  methods: {
    /**
     * 热门列表
     *
     * @generated from rpc bilibili.app.show.v1.Popular.Index
     */
    index: {
      name: "Index",
      I: PopularResultReq,
      O: PopularReply,
      kind: MethodKind.Unary,
    },
  }
};
