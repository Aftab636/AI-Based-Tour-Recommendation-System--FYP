// 'use client'
// import { useState } from 'react'

// export default function RecommendationForm({ onSubmit, loading }) {
//   const [preferences, setPrefs] = useState({
//     budgetMin: 0,
//     budgetMax: 1000,
//     tourTypes: [],
//     locations: [],
//     groupSize: 1
//   })

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     setPrefs(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' 
//         ? checked 
//           ? [...prev[name], value]
//           : prev[name].filter(item => item !== value)
//         : value
//     }))
//   }

//   return (
//     <form 
//       onSubmit={(e) => {
//         e.preventDefault()
//         onSubmit(preferences)
//       }}
//       className="space-y-4"
//     >
//       <div>
//         <label>Budget Range</label>
//         <div className="flex gap-4">
//           <input
//             type="number"
//             name="budgetMin"
//             value={preferences.budgetMin}
//             onChange={handleChange}
//             className="border p-2"
//           />
//           <input
//             type="number"
//             name="budgetMax"
//             value={preferences.budgetMax}
//             onChange={handleChange}
//             className="border p-2"
//           />
//         </div>
//       </div>

//       <div>
//         <label>Tour Types</label>
//         {['adventure', 'family', 'party', 'classical'].map(type => (
//           <div key={type}>
//             <input
//               type="checkbox"
//               id={type}
//               name="tourTypes"
//               value={type}
//               checked={preferences.tourTypes.includes(type)}
//               onChange={handleChange}
//             />
//             <label htmlFor={type}>{type}</label>
//           </div>
//         ))}
//       </div>

//       <button 
//         type="submit" 
//         disabled={loading}
//         className="bg-blue-500 text-white p-2 rounded disabled:opacity-50"
//       >
//         {loading ? 'Processing...' : 'Get Recommendations'}
//       </button>
//     </form>
//   )
// }


// 'use client'

// import { useState } from 'react'

// export default function RecommendationForm({ onSubmit, loading }) {
//   const [preferences, setPrefs] = useState({
//     budgetMin: 0,
//     budgetMax: 1000,
//     tourTypes: [],
//     locations: [],
//     groupSize: 1,
//     method: 'hybrid'
//   })

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     setPrefs(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' 
//         ? checked 
//           ? [...prev[name], value]
//           : prev[name].filter(item => item !== value)
//         : value
//     }))
//   }

//   // Handle multi-select changes
//   const handleMultiSelect = (e) => {
//     const options = [...e.target.selectedOptions];
//     const values = options.map(option => option.value);
//     setPrefs(prev => ({ ...prev, [e.target.name]: values }));
//   }

//   return (
//     <form 
//       onSubmit={(e) => {
//         e.preventDefault()
//         onSubmit(preferences)
//       }}
//       className="space-y-4"
//     >
//       <div>
//         <label className="block mb-1 font-medium">Budget Range</label>
//         <div className="flex gap-4">
//           <div className="w-1/2">
//             <label className="text-sm text-gray-600">Min ($)</label>
//             <input
//               type="number"
//               name="budgetMin"
//               value={preferences.budgetMin}
//               onChange={handleChange}
//               className="border p-2 w-full rounded"
//             />
//           </div>
//           <div className="w-1/2">
//             <label className="text-sm text-gray-600">Max ($)</label>
//             <input
//               type="number"
//               name="budgetMax"
//               value={preferences.budgetMax}
//               onChange={handleChange}
//               className="border p-2 w-full rounded"
//             />
//           </div>
//         </div>
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">Tour Types</label>
//         <div className="grid grid-cols-2 gap-2">
//           {['adventure', 'family', 'party', 'classical'].map(type => (
//             <div key={type} className="flex items-center">
//               <input
//                 type="checkbox"
//                 id={type}
//                 name="tourTypes"
//                 value={type}
//                 checked={preferences.tourTypes.includes(type)}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               <label htmlFor={type} className="capitalize">{type}</label>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">Preferred Locations</label>
//         <select
//           name="locations"
//           multiple
//           value={preferences.locations}
//           onChange={handleMultiSelect}
//           className="border p-2 w-full rounded"
//           size={4}
//         >
//           <option value="france">France</option>
//           <option value="dubai">Dubai</option>
//           <option value="usa">USA</option>
//           <option value="italy">Italy</option>
//           <option value="spain">Spain</option>
//         </select>
//         <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">Group Size</label>
//         <input
//           type="number"
//           name="groupSize"
//           min="1"
//           value={preferences.groupSize}
//           onChange={handleChange}
//           className="border p-2 w-full rounded"
//         />
//       </div>

//       <div>
//         <label className="block mb-1 font-medium">Recommendation Method</label>
//         <select
//           name="method"
//           value={preferences.method}
//           onChange={handleChange}
//           className="border p-2 w-full rounded"
//         >
//           <option value="hybrid">Hybrid (Content + Ratings)</option>
//           <option value="content">Content-Based Only</option>
//           <option value="popular">Popular Tours</option>
//         </select>
//       </div>

//       <button 
//         type="submit" 
//         disabled={loading}
//         className="bg-blue-500 text-white p-2 rounded disabled:opacity-50 w-full font-medium"
//       >
//         {loading ? 'Processing...' : 'Get Recommendations'}
//       </button>
//     </form>
//   )
// }









'use client'

import { useState } from 'react'

export default function RecommendationForm({ onSubmit, loading }) {
  const [preferences, setPrefs] = useState({
    budgetMin: 0,
    budgetMax: 1000,
    tourTypes: [],
    locations: [],
    groupSize: 1,
    method: 'hybrid'
  })

  // Available tour types (must match backend choices)
  const tourTypes = [
    { value: 'party', label: 'Party' },
    { value: 'family', label: 'Family' },
    { value: 'dj_night', label: 'DJ Night' },
    { value: 'classical', label: 'Classical' }
  ]

  // Sample locations (from your seed data)
  const locations = [
    { value: 'Brazil', label: 'Brazil' },
    { value: 'Argentina', label: 'Argentina' },
    { value: 'USA', label: 'USA' },
    { value: 'Japan', label: 'Japan' },
    { value: 'Thailand', label: 'Thailand' },
    { value: 'Morocco', label: 'Morocco' },
    { value: 'Australia', label: 'Australia' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Denmark', label: 'Denmark' },
    { value: 'Costa Rica', label: 'Costa Rica' },
    { value: 'Greece', label: 'Greece' },
    { value: 'Egypt', label: 'Egypt' },
    { value: 'China', label: 'China' },
    { value: 'Netherlands', label: 'Netherlands' }
  ]

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setPrefs(prev => ({
      ...prev,
      [name]: type === 'checkbox' 
        ? checked 
          ? [...prev[name], value]
          : prev[name].filter(item => item !== value)
        : value
    }))
  }

  // Handle multi-select changes
  const handleMultiSelect = (e) => {
    const options = [...e.target.selectedOptions];
    const values = options.map(option => option.value);
    setPrefs(prev => ({ ...prev, [e.target.name]: values }));
  }

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit(preferences)
      }}
      className="space-y-4"
    >
      <div>
        <label className="block mb-1 font-medium">Budget Range</label>
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="text-sm text-gray-600">Min ($)</label>
            <input
              type="number"
              name="budgetMin"
              value={preferences.budgetMin}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          </div>
          <div className="w-1/2">
            <label className="text-sm text-gray-600">Max ($)</label>
            <input
              type="number"
              name="budgetMax"
              value={preferences.budgetMax}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">Tour Types</label>
        <div className="grid grid-cols-2 gap-2">
          {tourTypes.map(type => (
            <div key={type.value} className="flex items-center">
              <input
                type="checkbox"
                id={type.value}
                name="tourTypes"
                value={type.value}
                checked={preferences.tourTypes.includes(type.value)}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={type.value}>{type.label}</label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">Preferred Locations</label>
        <select
          name="locations"
          multiple
          value={preferences.locations}
          onChange={handleMultiSelect}
          className="border p-2 w-full rounded"
          size={4}
        >
          {locations.map(location => (
            <option key={location.value} value={location.value}>
              {location.label}
            </option>
          ))}
        </select>
        <p className="text-xs text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
      </div>

      <div>
        <label className="block mb-1 font-medium">Group Size</label>
        <input
          type="number"
          name="groupSize"
          min="1"
          value={preferences.groupSize}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Recommendation Method</label>
        <select
          name="method"
          value={preferences.method}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        >
          <option value="hybrid">Hybrid (Content + Ratings)</option>
          <option value="content">Content-Based Only</option>
          <option value="popular">Popular Tours</option>
        </select>
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="bg-blue-500 text-white p-2 rounded disabled:opacity-50 w-full font-medium"
      >
        {loading ? 'Processing...' : 'Get Recommendations'}
      </button>
    </form>
  )
}