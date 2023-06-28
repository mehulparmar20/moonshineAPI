import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { createHash } from 'crypto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    await user.save();

    // delete user.password;
    return user;
  }
 
  // async create(createUserDto: CreateUserDto): Promise<User> {
  //   const { userPassword, ...rest } = createUserDto; // Destructure userPassword from the DTO
  //   const hashedPassword = createHash('sha1').update(userPassword).digest('hex');
  
  //   const user = this.userRepository.create({ ...rest, userPassword: hashedPassword }); // Spread the remaining properties of the DTO
  
  //   return this.userRepository.save(user);
  // }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(userId: number): Promise<User> {
    return this.userRepository.findOne({where: {userId}});
  }

  async update(userId: number, updateUserDto: CreateUserDto): Promise<User> {
    const user = await this.findOne(userId);
    if (!user) {
      // Handle error if user not found
    }
    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async remove(userId: number): Promise<void> {
    await this.userRepository.delete(userId);
  }


  async findByEmail(email: string) {
    return await User.findOne({
      where: {
        userEmail: email,
      },
    });
  }
}
