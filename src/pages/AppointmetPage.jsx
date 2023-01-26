import React from 'react'

const AppointmetPage = () => {
  return (
    <div className="flex flex-col bg-pink-200 min-h-screen">
    <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg bg-gray-300 lg:max-w-4xl mx-auto">
                <table className="min-w-full divide-y divide-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-black uppercase "
                            >
                                Patient ID
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-black uppercase "
                            >
                                Patient Name
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-black uppercase "
                            >
                                Doctor name
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-black uppercase "
                            >
                                Appointment Date
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-black uppercase "
                            >
                                Fix or reschedule
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-500">
                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                1
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              sheela
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            Gokulakannan
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            Feb 22,2023
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            fix
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                2
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              mahesh
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              Jayaganesh
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            Feb 04,2023
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            Reshedule to feb 08,2023
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                3
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              sudha
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              Logeshwaran
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            Feb 16,2023
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            fix
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
  )
}

export default AppointmetPage