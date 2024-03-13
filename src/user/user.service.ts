import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { user } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(user) 
    private userRepository:Repository<user>
  ) {}
  
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto)
    // return 'This action adds a new user';
  }

  findAll() : Promise<user[]> {
    return this.userRepository.find();
    // return `This action returns all user`;
  }

  async findOne(id: number) : Promise<user> { 
    return await this.userRepository.findOneBy({
      id
    });
    // return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto)
    // return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return await this.userRepository.delete(id)
    // return `This action removes a #${id} user`;
  }
}
