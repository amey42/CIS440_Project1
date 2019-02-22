using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace accountmanager
{
    public class Restaurant
    {
        //this is just a container for all info related
        //to a restaurant.  We'll simply create public class-level
        //variables representing each piece of information!
        public int id;
        public string user;
        public string name;
        public string type;
        public int rating;
        public string address;
        public string city;
        public string state;
        public string zip;
        public bool tried;
    }
}