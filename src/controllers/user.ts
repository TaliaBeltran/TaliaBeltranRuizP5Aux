import { Request, Response } from 'express';
import User, { IUser } from "../models/user";

class UserControllers {
  public async index(req: Request, res: Response) {
    //res.send("Hola a todos");
    const users = await User.find({});
    res.json({ message: "all users", users });
  }
  public async profile(req: Request, res: Response) {
    const { id } = req.params;
    const findUser = await User.findById(id);
    res.json({ message: "my profile", findUser });
  }
  public async signUp(req: Request, res: Response) {
    const { fullname,username, email, nick, password }=req.body;
    const nUser = new User(req.body);
    await nUser.save();
    res.json({ message: "user registrered", nUser });
    res.status(101).end();
  }
  public async edit(req: Request, res: Response) {
    const { id } = req.params;
    const { fullname, username, email, nick, password } = req.body;
    const eUser = await User.findByIdAndUpdate(id,req.body);
    res.json({ message: "usuario actualizado" });
  }
  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    const dUser = await User.findByIdAndDelete(id);
    res.json({ message: "usuario eliminado" });
  }
}
export const userControllers = new UserControllers();
