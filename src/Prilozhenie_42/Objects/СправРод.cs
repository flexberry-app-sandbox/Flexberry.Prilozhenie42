﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Prilozhenie_42
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// СправРод.
    /// </summary>
    // *** Start programmer edit section *** (СправРод CustomAttributes)

    // *** End programmer edit section *** (СправРод CustomAttributes)
    [AutoAltered()]
    [Caption("Справочник Родители")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СправРодE", new string[] {
            "Фио as \'Фио Родителя\'"})]
    [View("СправРодL", new string[] {
            "Фио as \'Фио Родителя\'"})]
    public class СправРод : ICSSoft.STORMNET.DataObject
    {
        
        private string fФио;
        
        // *** Start programmer edit section *** (СправРод CustomMembers)

        // *** End programmer edit section *** (СправРод CustomMembers)

        
        /// <summary>
        /// Фио.
        /// </summary>
        // *** Start programmer edit section *** (СправРод.Фио CustomAttributes)

        // *** End programmer edit section *** (СправРод.Фио CustomAttributes)
        [StrLen(255)]
        public virtual string Фио
        {
            get
            {
                // *** Start programmer edit section *** (СправРод.Фио Get start)

                // *** End programmer edit section *** (СправРод.Фио Get start)
                string result = this.fФио;
                // *** Start programmer edit section *** (СправРод.Фио Get end)

                // *** End programmer edit section *** (СправРод.Фио Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СправРод.Фио Set start)

                // *** End programmer edit section *** (СправРод.Фио Set start)
                this.fФио = value;
                // *** Start programmer edit section *** (СправРод.Фио Set end)

                // *** End programmer edit section *** (СправРод.Фио Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СправРодE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СправРодE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СправРодE", typeof(IIS.Prilozhenie_42.СправРод));
                }
            }
            
            /// <summary>
            /// "СправРодL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СправРодL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СправРодL", typeof(IIS.Prilozhenie_42.СправРод));
                }
            }
        }
    }
}
