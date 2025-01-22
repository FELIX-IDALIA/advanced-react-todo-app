import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

// Create async thunk for weather API
export const fetchWeather = createAsyncThunk(
    'todos/fetchWeather',
    async (_, { rejectWithValue }) => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London`
        );
        
        if (!response.ok) {
          throw new Error('Weather data fetch failed');
        }
        
        const data = await response.json();
        return {
          temperature: data.current.temp_c,
          condition: data.current.condition.text,
          icon: data.current.condition.icon
        };
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    weather: null,
    weatherStatus: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    weatherError: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.weatherStatus = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weatherStatus = 'succeeded';
        state.weather = action.payload;
        state.weatherError = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.weatherStatus = 'failed';
        state.weatherError = action.payload;
      });
  }
});

export const { addTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;