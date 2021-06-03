import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): void {
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists.admin) {
      throw new Error("User is not admin")
    }

    const users = this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
