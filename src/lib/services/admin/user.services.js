import db from "@/lib/database/models/index.js";
const { User,User_Type } = db;


class UserServices {
    static async findByUsername(username){
        try{
           return await User.findOne({
                where : {
                    username
                },
                include : {
                  model : User_Type,
                  as: 'UserType',
                  attributes: ["role"]
                },
            });             
        }catch(error){
          throw(error)
        }
    }

    static async findByUsernameOrEmail(username, email) {
        const result = {
          data: null,
          error: null,
        };
        try {
        
          const userByUsername = await User.findOne({
            where: {
              username,
            },
          });
    
          
          const userByEmail = await User.findOne({
            where: {
              email,
            },
          });
    
         
          if (userByUsername) {
            result.data = userByUsername;
          } else if (userByEmail) {
            result.data = userByEmail;
          }
    
        } catch (error) {
          console.log("Error in findByUsernameOrEmail", error);
          result.error = error.message;
        } finally {
          return result;
        }
      }
    
      static async createUser({ username, email, password }) {
        const result = {
          data: null,
          error: null,
        };
        try {
          const totalUsers = await User.count();
            let userType;
            if(totalUsers === 0){
               userType= await UserType.create({ role: 'editor' });
            }
            else if (totalUsers===1) {
               userType=await UserType.create({ role: 'author' });
            }
            else{
                userType=await UserType.findOne({ where: { role: 'author' } });
            }
        
         
          const user = await User.create({
            username,
            email,
            password,
            userTypeId: userType.id, 
          });

          const createdUser = await User.findOne({
            where: {
              id: user.id,
            },
            include : {
              model : UserType,
              attributes: ["role"]
            }
          });
    
          if (!createdUser) {
            throw new Error("User not created");
          }
    
          result.data = createdUser;
        } catch (error) {
          console.log("Error in createUser", error);
          result.error = error.message;
        } finally {
          return result;
        }
      }

}

export default UserServices;  