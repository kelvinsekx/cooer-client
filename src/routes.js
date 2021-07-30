import {default as Home, hm} from "./shared/Home";
import Register from "./pages/register";

import Muha from "./pages/muha";
import Street from "./pages/street";
import Ayoze from "./pages/ayoze";
import Discuss from "./pages/ayozeDiscuss";
import Profile from "./user/profile"
import EditProfile from "./pages/editProfile";
import Comment from "./pages/comment";
import Status from "./pages/status";

export const NonProtectedRoutes = [
    {
    	path: "/",
	    component: hm
    },    
    {
        path: "/login",
        component: Home
    },
    {
        path: "/register",
        component: Register
    }
];

export const protectedRoutes = [
    {
        path: "/home",
        component: Muha,
        token: "np"
    },
    {
        path: "/street",
        component: Street
    },
    {
        path: "/ayoze",
        component: Ayoze
    },
    {
        path: "/profile/:userId",
        component: Profile
    },
    {
        path: "/profile/:userId/edit",
        component: EditProfile
    },
    {
        path: "/ayoze/:gossiptitle/:gossipId",
        component: Discuss
    },
    {
        path: "/:username/:commentQuotes/status/:commentId",
        component: Status
    },
    {
        path: "/:username/:commentsQuotes/comments/:commentId",
        component: Comment
    }
]
