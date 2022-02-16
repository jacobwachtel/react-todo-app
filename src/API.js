import axios from 'axios';

const baseUrl = 'http://localhost:8000';

export const fetchTodos = async () => {
   try {
      const promise = await fetch(`${baseUrl}/api/v1/tasks`, {
         'Access-Control-Allow-origin': '*',
      });
      return promise;
   } catch (err) {
      throw new Error(err);
   }
};
