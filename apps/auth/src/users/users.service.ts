import { Injectable } from '@nestjs/common';
import { SignUpDTO } from './dto/signup.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(data: SignUpDTO) {
    const newUser = new this.userModel({
      name: data.name,
      email: data.email,
      password: data.password,
    });

    const newData = await newUser.save();

    const token = this.jwtService.sign({
      email: newData.email,
      id: newData._id,
    });

    return { token };
  }

  async login(data: LoginDto) {
    const user = await this.userModel.findOne({ email: data.email });

    if (!user) {
      throw new Error('User not found');
    }

    if (user.password !== data.password) {
      throw new Error('Invalid password');
    }

    const token = await this.jwtService.sign({
      email: user.email,
      id: user._id,
    });

    return { token };
  }

  async getUserByEmail(email: string) {
    const user = await this.userModel.findOne({
      email: email,
    });

    return JSON.stringify(user.toObject());
  }

  getAllUsers() {
    return this.userModel.find({});
  }
}
