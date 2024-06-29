import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly userRepositori: Repository<User>){}

  create(createUserDto: CreateUserDto) {
    return this.userRepositori.save(this.userRepositori.create(createUserDto));
  }

  findAll() {
    return this.userRepositori.find();
  }

  findOne(id: string) {
    return this.userRepositori.findOneBy({id:id});
  }

  update(id: string, updateUserDto: UpdateUserDto) {

      return this.userRepositori.update({id}, updateUserDto);
   
  }

  remove(id: string) {
    return this.userRepositori.delete(id);
  }
}
