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
    /// Справ уч.
    /// </summary>
    // *** Start programmer edit section *** (СправУч CustomAttributes)

    // *** End programmer edit section *** (СправУч CustomAttributes)
    [AutoAltered()]
    [Caption("Справочник Учеников")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СправУчE", new string[] {
            "Фио as \'Фио\'",
            "ДатаРожд as \'Дата Рождения\'",
            "КлассУч as \'Класс Ученика\'",
            "КлассУч.Назв as \'Класс Ученика\'",
            "СправРод as \'Фио Родителя\'",
            "СправРод.Фио as \'Фио Родителя\'"})]
    [View("СправУчL", new string[] {
            "Фио as \'Фио\'",
            "ДатаРожд as \'Дата Рождения\'",
            "КлассУч.Назв as \'Класс Ученика\'",
            "СправРод.Фио as \'Фио Родителя\'"})]
    public class СправУч : ICSSoft.STORMNET.DataObject
    {
        
        private string fФио;
        
        private System.DateTime fДатаРожд;
        
        private IIS.Prilozhenie_42.СправРод fСправРод;
        
        private IIS.Prilozhenie_42.КлассУч fКлассУч;
        
        // *** Start programmer edit section *** (СправУч CustomMembers)

        // *** End programmer edit section *** (СправУч CustomMembers)

        
        /// <summary>
        /// ДатаРожд.
        /// </summary>
        // *** Start programmer edit section *** (СправУч.ДатаРожд CustomAttributes)

        // *** End programmer edit section *** (СправУч.ДатаРожд CustomAttributes)
        public virtual System.DateTime ДатаРожд
        {
            get
            {
                // *** Start programmer edit section *** (СправУч.ДатаРожд Get start)

                // *** End programmer edit section *** (СправУч.ДатаРожд Get start)
                System.DateTime result = this.fДатаРожд;
                // *** Start programmer edit section *** (СправУч.ДатаРожд Get end)

                // *** End programmer edit section *** (СправУч.ДатаРожд Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СправУч.ДатаРожд Set start)

                // *** End programmer edit section *** (СправУч.ДатаРожд Set start)
                this.fДатаРожд = value;
                // *** Start programmer edit section *** (СправУч.ДатаРожд Set end)

                // *** End programmer edit section *** (СправУч.ДатаРожд Set end)
            }
        }
        
        /// <summary>
        /// Фио.
        /// </summary>
        // *** Start programmer edit section *** (СправУч.Фио CustomAttributes)

        // *** End programmer edit section *** (СправУч.Фио CustomAttributes)
        [StrLen(255)]
        public virtual string Фио
        {
            get
            {
                // *** Start programmer edit section *** (СправУч.Фио Get start)

                // *** End programmer edit section *** (СправУч.Фио Get start)
                string result = this.fФио;
                // *** Start programmer edit section *** (СправУч.Фио Get end)

                // *** End programmer edit section *** (СправУч.Фио Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СправУч.Фио Set start)

                // *** End programmer edit section *** (СправУч.Фио Set start)
                this.fФио = value;
                // *** Start programmer edit section *** (СправУч.Фио Set end)

                // *** End programmer edit section *** (СправУч.Фио Set end)
            }
        }
        
        /// <summary>
        /// Справ уч.
        /// </summary>
        // *** Start programmer edit section *** (СправУч.КлассУч CustomAttributes)

        // *** End programmer edit section *** (СправУч.КлассУч CustomAttributes)
        [PropertyStorage(new string[] {
                "КлассУч"})]
        [NotNull()]
        public virtual IIS.Prilozhenie_42.КлассУч КлассУч
        {
            get
            {
                // *** Start programmer edit section *** (СправУч.КлассУч Get start)

                // *** End programmer edit section *** (СправУч.КлассУч Get start)
                IIS.Prilozhenie_42.КлассУч result = this.fКлассУч;
                // *** Start programmer edit section *** (СправУч.КлассУч Get end)

                // *** End programmer edit section *** (СправУч.КлассУч Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СправУч.КлассУч Set start)

                // *** End programmer edit section *** (СправУч.КлассУч Set start)
                this.fКлассУч = value;
                // *** Start programmer edit section *** (СправУч.КлассУч Set end)

                // *** End programmer edit section *** (СправУч.КлассУч Set end)
            }
        }
        
        /// <summary>
        /// Справ уч.
        /// </summary>
        // *** Start programmer edit section *** (СправУч.СправРод CustomAttributes)

        // *** End programmer edit section *** (СправУч.СправРод CustomAttributes)
        [PropertyStorage(new string[] {
                "СправРод"})]
        [NotNull()]
        public virtual IIS.Prilozhenie_42.СправРод СправРод
        {
            get
            {
                // *** Start programmer edit section *** (СправУч.СправРод Get start)

                // *** End programmer edit section *** (СправУч.СправРод Get start)
                IIS.Prilozhenie_42.СправРод result = this.fСправРод;
                // *** Start programmer edit section *** (СправУч.СправРод Get end)

                // *** End programmer edit section *** (СправУч.СправРод Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СправУч.СправРод Set start)

                // *** End programmer edit section *** (СправУч.СправРод Set start)
                this.fСправРод = value;
                // *** Start programmer edit section *** (СправУч.СправРод Set end)

                // *** End programmer edit section *** (СправУч.СправРод Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СправУчE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СправУчE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СправУчE", typeof(IIS.Prilozhenie_42.СправУч));
                }
            }
            
            /// <summary>
            /// "СправУчL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СправУчL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СправУчL", typeof(IIS.Prilozhenie_42.СправУч));
                }
            }
        }
    }
}
