import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfileData, getProfileData } from "../services/ProfileDataApi";
import { mUserName } from "../Store/features/userSlice";

function useProfileLogic() {
    const dispatch = useDispatch();
    const { token, firstName, lastName, userName } = useSelector((store) => store.user);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getProfileData(token);
                dispatch(
                    mUserName({
                        firstName: response.firstName,
                        lastName: response.lastName,
                        userName: response.userName,
                    })
                );
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [dispatch, token]);

    //appelé lorsque l'utilisateur sauvegarder son nouveau username
    const handleSaveProfileData = async (e, setIsEditing) => {
        e.preventDefault();
        try {
            const updateName = {
                userName: e.target["userName"].value || userName,
            };
            const response = await editProfileData(token, updateName);
            dispatch(
                mUserName({
                    firstName: response.firstName,
                    lastName: response.lastName,
                    userName: response.userName
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
        userName,
        handleSaveProfileData,
    };
}

export default useProfileLogic;