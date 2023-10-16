import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfileData, getProfileData } from "../services/ProfileDataApi";
import { userName } from "../Store/features/userSlice";

function useProfileLogic() {
    const dispatch = useDispatch();
    const { token, firstName, lastName } = useSelector((store) => store.user);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getProfileData(token);
                dispatch(
                    userName({
                        firstName: response.firstName,
                        lastName: response.lastName,
                    })
                );
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [dispatch, token]);

    const handleSaveProfileData = async (e, setIsEditing) => {
        e.preventDefault();
        try {
            const updateName = {
                firstName: e.target["firstName"].value || firstName,
                lastName: e.target["lastName"].value || lastName,
            };
            const response = await editProfileData(token, updateName);
            dispatch(
                userName({
                    firstName: response.firstName,
                    lastName: response.lastName,
                })
            );
            setIsEditing(false);
        } catch (error) {
            console.error("Profile update failed:", error);
        }
    };

    return {
        firstName,
        lastName,
        handleSaveProfileData,
    };
}

export default useProfileLogic;