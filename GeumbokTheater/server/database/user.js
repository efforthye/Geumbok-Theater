import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: false, // 이름 같은 경우 동명이인이 있을 수 있으므로 false 처리함
  },
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  userPw: {
    type: String,
    required: true,
  },
  userPhone: {
    type: Number,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
    lowercase: true, // 대문자 -> 소문자
  },
  userAddress: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", userSchema);
